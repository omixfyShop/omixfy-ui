const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const semver = require('semver');

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
);

const packageName = packageJson.name;
const localVersion = packageJson.version;

try {
  const publishedVersion = execSync(`npm view ${packageName} version`, {
    encoding: 'utf8',
    stdio: 'pipe',
  }).trim();

  console.log(`Versão local: ${localVersion}`);
  console.log(`Versão publicada no npm: ${publishedVersion}`);

  if (semver.gt(localVersion, publishedVersion)) {
    console.log('✓ A versão local é maior que a publicada. Publicação permitida.');
    process.exit(0);
  } else {
    console.log('✗ A versão local não é maior que a publicada. Publicação bloqueada.');
    console.log(`  Versão local: ${localVersion}`);
    console.log(`  Versão publicada: ${publishedVersion}`);
    process.exit(1);
  }
} catch (error) {
  if (error.message.includes('404') || error.stdout?.includes('404')) {
    console.log('✓ Pacote não encontrado no npm. Primeira publicação permitida.');
    process.exit(0);
  } else {
    console.error('Erro ao verificar versão:', error.message);
    process.exit(1);
  }
}
