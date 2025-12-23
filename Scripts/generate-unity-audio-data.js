studio.menu.addMenuItem({
    name: "Generate Selected as ScriptableObject",
    isEnabled: function() {
        var events = studio.window.browserSelection();
        return events
    },
    keySequence: "Alt+R",
    execute: function() {
        var events = studio.window.browserSelection();
        var lineBreak = "\r\n";
        var leftCurly = String.fromCharCode(123);
        var rightCurly = String.fromCharCode(125);
        var tab = String.fromCharCode(9);
        var quote = String.fromCharCode(34);
        var attribute = "[SerializeField]";
        var modifier = " private EventReference ";
        var using = "using FMODUnity;" + lineBreak + "using UnityEngine;";
        
        // Prompt for category type first
        var categoryType = studio.system.getText("Category Type", "kachow");

        var defaultClassName = "AudioData_" + categoryType;
        var defaultMenuName = "Custom/FMOD/" + categoryType + " Audio Data";

        var className = studio.system.getText("File Name", defaultClassName);
        var menuName = quote + studio.system.getText("Menu Name", defaultMenuName) + quote;
        
        // Prompt for output file location
        var projectPath = studio.project.filePath;
        projectPath = projectPath.substr(0, projectPath.lastIndexOf("/"));
        var outputPath = studio.system.getText("Output Path", projectPath);
        
        var assetMenuText = "[CreateAssetMenu(fileName = " + quote + className + quote + ", menuName = " + menuName + ")]";
        var classText = "public class " + className + " : ScriptableObject" + lineBreak + leftCurly;
        var finalData = using + lineBreak + lineBreak + assetMenuText + lineBreak + classText + lineBreak;
        
        for (x = 0; x < events.length; x++) {
            var eventName = events[x].name;
            eventName = eventName.replace(/_/g, '');
            eventName = eventName.replace(/\s+/g, '');
            eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
            
            finalData += tab + attribute + modifier + eventName + ";" + lineBreak;
        }
        
        finalData += rightCurly;
        
        var filePath = outputPath + "/" + className + ".cs";
        var file = studio.system.getFile(filePath);
        file.open(studio.system.openMode.WriteOnly);
        file.writeText(finalData);
        file.close();
    }
});