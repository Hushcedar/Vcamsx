# Install and use VCAMSX

## Requirements

- Android **10 or newer**.
- An ARM Android device; the APK contains `arm64-v8a` and `armeabi-v7a` native libraries.
- Internet access for purchases and license checks.
- A supported engine setup and target app. Root-based setups require their respective root/module tools.

## Install or update

1. Download [VCAMSX.apk from the latest official release](https://github.com/Hushcedar/Vcamsx/releases/latest/download/VCAMSX.apk).
2. Open the downloaded APK on your phone and allow installation from that browser or file manager if prompted.
3. Choose **Update** if VCAMSX is already installed. Do not uninstall first; uninstalling may remove app data.
4. Open VCAMSX and follow the engine-specific setup instructions.

If you see a ZIP archive instead of an Android installer, download **VCAMSX.apk** from the release's Assets list. Do not use GitHub's “Source code” archives.

## Choose an engine

### Legacy · LSPosed

Use this route on a compatible rooted phone with LSPosed. Enable VCAMSX as a module, choose your target apps in the module scope and follow the in-app tutorial. Restart the target app after changing its module scope.

### Clone · No Root

Choose the no-root setup offered inside VCAMSX:

- **MochiCloner:** follow the in-app tutorial and enable VCAMSX for the selected clone in the helper's module settings.
- **VCAMSX Host Clone:** select an installed app, prepare its separate APK, then use **Install** and approve Android's installation prompt. Keep the original app installed.

These are different setup routes. Use the instructions for the route you selected. Compatibility varies, especially for apps that require Google services or enforce restrictions on cloned environments.

### Standalone

Follow the availability state displayed in your app. An unavailable or coming-soon engine cannot be enabled through this repository.

## Select media

1. Select the target app.
2. Add a video or image, or enter a supported streaming URL.
3. Enable the matching injection setting.
4. Open the target app and start its camera session.
5. Use **Floating controls** to control playback while the target app is active.

### Audio

- **Add Audio** selects a separate file for voice-note injection.
- **Inject video audio** uses the selected video's soundtrack during supported calls.
- **Local audio monitor** lets you hear the injected audio while the microphone is active; it stops when capture ends.
- The decoding toggle changes between software and hardware decoding. Test each mode on your device if playback is not smooth.

## Activate or restore access

Open **My Keys / Buy Keys**. Buy through the in-app gateway or restore access using your clean 36-character UUID license key. Keep a private copy of the key.

If you already paid, reopen VCAMSX and tap **I paid · Check**. Keep your receipt; do not pay repeatedly while confirmation is pending.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Download will not install | Confirm that you downloaded the actual `VCAMSX.apk` release asset. |
| Update is rejected | Confirm that your existing app is an official VCAMSX build. Keep the Android error message and report it before uninstalling. |
| Target app does not receive media | Check engine setup, selected target, media selection, injection switches and module scope. Restart the target app. |
| Clone crashes or cannot sign in | Record the target app version, engine, Android version and crash details. Google-dependent apps are not guaranteed to work in Host Clone. |
| No audio reaches the other side | Check which audio source is enabled and whether the target app is actively capturing audio. |
| Payment still pending | Tap **I paid · Check** and keep your receipt. |

For further help, [open a support issue](https://github.com/Hushcedar/Vcamsx/issues/new/choose). Public reports must not include keys, receipts or private media.
