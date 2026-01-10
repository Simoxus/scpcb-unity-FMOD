# SCP: Project Unity FMOD submodule

This repository contains the **FMOD Studio** project used for **SCP: Project Unity**, yet another Unity remake of **SCP – Containment Breach**.  
Any audio heard in the game: music, ambience, SFX, and voice lines, are built using FMOD Studio.

## Overview

FMOD Studio is used to give the game an extremely flexible and dynamic audio system. With it and the very splendid API that FMOD provides for us, we can control practically anything.

If you’re new to FMOD or the project, I'd recommend checking out the [FMOD Studio Documentation](https://www.fmod.com/resources/documentation-studio) as a reference, since although the beginning of trying to use FMOD's tools may be a bit difficult at first, it is absolutely worth it.

## Getting Started

1. Download/clone the source code for the game from the [main repository for Project Unity](https://github.com/Simoxus/scp-project-unity) (this repository is already included as a submodule, and you'll probably want to hear your events in-game)
2. Download [FMOD Studio 2.03](https://www.fmod.com/download#fmodstudio) (you might need to create an account first)
3. Go through the **FMOD Studio** installer wizard
4. Once everything is downloaded, extract the source code for Project Unity
5. Navigate to the "**FmodStudio**" folder and open "**ProjectUnity_FMOD.fspro**"

## Build Settings

- **Target Platform**: Windows
- **Encryption**: None
- **Bank Output Path**: `FmodStudio/Build/` (FmodStudio being this repository)

## Resources

- [FMOD Studio Documentation](https://www.fmod.com/resources/documentation-studio)
- [Alessandro Famà's FMOD Tutorials and Code](https://alessandrofama.com/tutorials/fmod/unity/)
- [Unity FMOD Integration Guide](https://www.fmod.com/docs/2.03/unity)  
