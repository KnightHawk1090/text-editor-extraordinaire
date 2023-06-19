const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
// triggered events
    window.deferredPrompt = event;
// remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
// add click event to butInstall button to handle the installation process.
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;
// if prompt is available show to the user
    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
// deferred prompt is set to null
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// Handle the appinstalled event
window.addEventListener('appinstalled', (event) => {

    window.defferredPrompt = null;
});