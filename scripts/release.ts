import { execa } from 'execa'

await execa('changelogen', [
    '--clean',
    '--output',
    'CHANGELOG.md',
    '--release',
    '--no-commit',
    '--no-tag',
    '--no-github',
])

await execa('pnpm', ['lint:fix'])
await execa('git', ['add', 'CHANGELOG.md', 'package.json'])

await import('../package.json').then((m) => `v${m.version}`).then(async (version) => {
    await execa('git', ['commit', '-m', `chore(release): ${version}`])
    await execa('git', ['tag', '-am', version, version])
    await execa('git', ['push', '--follow-tags'])
})
