//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'longwings:'

	//Compressed Gear Recipe
	event.remove({output: prefix + 'netting'})
	event.shaped('8x ' + prefix + 'netting', ['A A', ' A ', 'A A'], {
		A: '#forge:string'
	})
})