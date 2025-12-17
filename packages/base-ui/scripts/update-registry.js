import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(BASE_DIR, 'templates');
const REGISTRY_DIR = path.join(BASE_DIR, 'registry');

function toSingular(plural) {
  const singularMap = {
    buttons: 'button',
    cards: 'card',
    texts: 'text',
  };
  return singularMap[plural] || plural.replace(/s$/, '');
}

function findComponentFile(dirPath, componentName, registryPath) {
  const exactFile = path.join(dirPath, `${componentName}.tsx`);
  if (fs.existsSync(exactFile)) {
    return exactFile;
  }

  if (registryPath) {
    const pathFromRegistry = path.basename(registryPath);
    const fileFromRegistry = path.join(dirPath, pathFromRegistry);
    if (fs.existsSync(fileFromRegistry)) {
      return fileFromRegistry;
    }
  }

  const files = fs.readdirSync(dirPath);
  const tsxFile = files.find(
    (file) => file.endsWith('.tsx') && !file.includes('.stories')
  );
  return tsxFile ? path.join(dirPath, tsxFile) : null;
}

function updateRegistry(componentDir, componentName) {
  const registryFile = path.join(REGISTRY_DIR, `${componentName}.json`);
  
  if (!fs.existsSync(registryFile)) {
    console.warn(`⚠️  Arquivo de registry não encontrado: ${registryFile}`);
    return;
  }

  const registryData = JSON.parse(fs.readFileSync(registryFile, 'utf-8'));

  if (!registryData.files || !registryData.files[0]) {
    console.warn(`⚠️  Estrutura de registry inválida para ${componentName}`);
    return;
  }

  const registryPath = registryData.files[0].path;
  const componentFile = findComponentFile(componentDir, componentName, registryPath);
  
  if (!componentFile) {
    console.warn(`⚠️  Arquivo .tsx não encontrado para ${componentName}`);
    return;
  }

  const componentContent = fs.readFileSync(componentFile, 'utf-8');

  registryData.files[0].content = componentContent;

  fs.writeFileSync(
    registryFile,
    JSON.stringify(registryData, null, 2) + '\n',
    'utf-8'
  );

  console.log(`✓ Atualizado: ${componentName}.json`);
}

function main() {
  console.log('🔄 Atualizando registries...\n');

  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.error(`❌ Diretório de templates não encontrado: ${TEMPLATES_DIR}`);
    process.exit(1);
  }

  if (!fs.existsSync(REGISTRY_DIR)) {
    console.error(`❌ Diretório de registry não encontrado: ${REGISTRY_DIR}`);
    process.exit(1);
  }

  const templateDirs = fs
    .readdirSync(TEMPLATES_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  if (templateDirs.length === 0) {
    console.warn('⚠️  Nenhum componente encontrado em templates/');
    return;
  }

  for (const templateDir of templateDirs) {
    const componentName = toSingular(templateDir);
    const componentDirPath = path.join(TEMPLATES_DIR, templateDir);
    updateRegistry(componentDirPath, componentName);
  }

  console.log('\n✅ Atualização concluída!');
}

main();