studio.menu.addMenuItem({
    name: "Export All Events to CSV",
    isEnabled: function () {
        return true;
    },
    execute: function () {
        var allEvents = studio.project.model.Event.findInstances();
        
        var lineBreak = "\r\n";
        var quote = String.fromCharCode(34);
        var fileName = studio.system.getText("File Name", "EventList");
        var projectPath = studio.project.filePath;
        projectPath = projectPath.substr(0, projectPath.lastIndexOf("/"));
        var outputPath = studio.system.getText("Output Path", projectPath);
        
        var csvData = "Event Name,Event Path,Is 3D,Is OneShot" + lineBreak;
        
        for (var i = 0; i < allEvents.length; i++) {
            var event = allEvents[i];
            var name = event.name;
            var path = event.getPath();
            var is3D = event.is3D ? "Yes" : "No";
            var isOneShot = event.isOneshot ? "Yes" : "No";
            
            csvData += quote + name + quote + "," +
                quote + path + quote + "," +
                is3D + "," +
                isOneShot + lineBreak;
        }
        
        var filePath = outputPath + "/" + fileName + ".csv";
        var file = studio.system.getFile(filePath);
        file.open(studio.system.openMode.WriteOnly);
        file.writeText(csvData);
        file.close();
        
        studio.system.message("Exported " + allEvents.length + " events to: " + filePath);
    }
});