# SCP: Project Unity – FMOD Studio Project

This repository contains the **FMOD Studio** project used for **SCP: Project Unity**, the ~~terrible~~ Unity remake of **SCP – Containment Breach**.  
All types of sounds heard in the game: music, ambience, SFX, and voice lines, are created, organized, and built here using FMOD Studio.

## Overview

FMOD Studio is used to give the game an *extremely* flexible and dynamic audio system. With it and the very ~~sexy~~ splendid API that FMOD provides for us, we can control practically anything, like soundscapes, ambient transitions, spatialized audio, audio occulsion, and randomized variations of sound (using multi-instruments), that make the game feel much more alive and immersive (and spoopy :D).

If you’re new to FMOD or the project, I'd recommend checking out the [FMOD Studio Documentation](https://www.fmod.com/resources/documentation-studio) as a reference, since although the beginning of trying to use FMOD's suite of tools may be a bit difficult at first, it is absolutely worth it.

## Getting Started

1. Download the source code for the game from the [main repository for Project Unity](https://github.com/Simoxus/scp-project-unity) (this repository is already included as a submodule, and you'll probably want to hear your events in-game)
2. Download [FMOD Studio 2.03](https://www.fmod.com/download#fmodstudio) (you might need to create an account first)
3. Go through the **FMOD Studio** installer wizard
4. Once everything is downloaded, extract the source code for Project Unity (using [7-Zip](https://www.7-zip.org/), [NanaZip](https://github.com/M2Team/NanaZip), [WinRAR](https://www.win-rar.com/start.html), or the [built-in one on Windows](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-8d28fa72-f2f9-712f-67df-f80cf89fd4e5))
5. Navigate to the "**FmodStudio**" folder and open "**ProjectUnity_FMOD.fspro**" (if you don't see an .fspro file with the exact same name, it's okay, just open it instead :D)

## Build Settings

- **Target Platform**: Windows
- **Encryption**: None
- **Bank Output Path**: `FmodStudio/Build/` (FmodStudio being this repository)

## Resources

- [FMOD Studio Documentation](https://www.fmod.com/resources/documentation-studio)
- [Alessandro Famà's Amazing FMOD Tutorials and Code to ~~yoink~~ Borrow](https://alessandrofama.com/tutorials/fmod/unity/)
- [Unity FMOD Integration Guide](https://www.fmod.com/docs/2.03/unity)  
- [SCP Wiki](https://scp-wiki.wikidot.com/)

## Stuff for Those Cool and So Very Awesome Sauce Collaborators/Contributors That Are Doing This for Absolutely Free and I Love Them So Very Much

### Guidelines for Contributing

When working on audio:

- **Test before committing** → Always play your event in isolation to confirm it works properly.  
- **Stay organized** → Keep folder names descriptive (`SFX/Footsteps/Concrete` instead of `New Folder` or `TestEvent_106_Shit_Absolutely_Everywere10202030`).  
- **Reuse instead of duplicating when possible** → Use parameters, multi-instruments, or nested events when possible.  
- **Clean up any unused assets** → Don’t leave behind dead events or placeholder stubs.  
- **Consistency does kinda matter** → Follow existing naming conventions for events, parameters, and banks.

### Workflow

- **Events** should be grouped logically (Music, Ambience, SFX, UI, Voice).  
- **Parameters** are preferred for variations (like the player's speed controlling footstep playback).  
- **Randomization**: Use FMOD’s multi-instruments or random pitch/volume for more natural sounds.  
- **Bank Structure**: Keep banks minimal and try not to load assets that aren’t needed.  

### Notes

- Try to keep commits **small and descriptive** (e.g., `Added new 173 defecation SFX`).  
- If you’re unsure about a naming scheme or setup, **ask before committing**.  
- Major structural changes (like reorganizing folders or banks) should in most cases, be discussed first.
