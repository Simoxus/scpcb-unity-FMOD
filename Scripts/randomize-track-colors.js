// from FMOD example scripts bt dubs

studio.menu.addMenuItem({ 
	name: "Randomize Track Colors",
	isEnabled: function () {
        return true;
    },
	execute: function() {
		var colors = ["Blue", "Cyan", "Green", "Magenta", "Red", "Yellow"];
		var event = studio.window.browserCurrent();
		event.groupTracks.forEach(function(track) {
			var randomColor = colors[Math.floor(Math.random() * colors.length)];
			var randomLightness = Math.floor(Math.random() * 3);
			var colorName = randomColor + (randomLightness ? " Light " + randomLightness : "");
			track.mixerGroup.color = colorName;
			track.modules.forEach(function(module) {
				module.color = colorName;
			});
		});
	}
});