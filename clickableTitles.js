/**
 * Jellyfin - Make episode titles in grid view clickable.
 *
 * Uses MutationObserver to wait for the episode container to appear,
 * then adds a click listener via event delegation.
 */
(function() {
    'use strict';

    // Selector for the container we need to find
    const containerSelector = '#childrenContent .itemsContainer.vertical-list, #content .itemsContainer.vertical-list';
    let eventListenerAdded = false; // Flag to ensure we only add the listener once
    let clickListenerFunction = null; // Store the listener function to potentially remove later if needed

    // Function to add the click listener
    function setupClickListener(container) {
        if (!container || eventListenerAdded) {
            return; // Exit if no container or listener already added
        }

        console.log('Jellyfin Custom Script: Found episode container, adding title click listener.');

        clickListenerFunction = function(event) {
            const titleSelector = '.listItemBody > .listItemBodyText:first-child';
            const titleElement = event.target.closest(titleSelector);

            if (titleElement) {
                const listItem = titleElement.closest('.listItem.listItem-largeImage');
                if (listItem) {
                    const imageLink = listItem.querySelector('.listItemImage[data-action="link"]');
                    if (imageLink) {
                        console.log('Jellyfin Custom Script: Title clicked, triggering image link click for item ID:', listItem.dataset.id);
                        event.preventDefault();
                        event.stopPropagation();
                        imageLink.click();
                    } else {
                        console.warn('Jellyfin Custom Script: Could not find clickable image link for title.');
                    }
                } else {
                     console.warn('Jellyfin Custom Script: Could not find parent list item for title.');
                }
            }
        };

        // Add the listener using the stored function reference
        container.addEventListener('click', clickListenerFunction, true); // Use capture phase

        eventListenerAdded = true; // Set flag
        console.log('Jellyfin Custom Script: Click listener added successfully.');
    }

    // --- MutationObserver Setup ---

    // Function to check if the container exists and set up listener
    function findAndSetupContainer() {
        if (eventListenerAdded) {
            if (observer) observer.disconnect(); // Stop observing if already set up
            return;
        }

        const container = document.querySelector(containerSelector);
        if (container) {
            // Container found, set up the listener
            setupClickListener(container);
            // Once found and set up, we can stop observing
            if (observer) {
                observer.disconnect();
                console.log('Jellyfin Custom Script: Container found, observer disconnected.');
            }
        }
        // If not found, the observer keeps running
    }

    // Define the observer instance
    const observer = new MutationObserver(function(mutationsList, observer) {
        // We could check mutationsList more specifically, but simply
        // trying to find the container on any change is often robust enough for this.
        // We only need to find it once.
        findAndSetupContainer();
    });

    // Start observing the body for changes in the DOM structure
    // Observing 'body' is broad but necessary if we don't know where content is injected.
    console.log('Jellyfin Custom Script: Starting MutationObserver to find episode container.');
    observer.observe(document.body, {
        childList: true, // Watch for addition/removal of children
        subtree: true    // Watch descendants as well
    });

    // Also run an initial check slightly after script load, just in case
    // the container is ready very quickly.
    setTimeout(findAndSetupContainer, 300); // Check after 300ms

})();