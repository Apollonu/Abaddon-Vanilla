ServerEvents.loaded(event => {
    event.server.runCommandSilent('/gamerule announceAdvancements false')
    event.server.runCommandSilent('/gamerule spawnRadius 32')
})