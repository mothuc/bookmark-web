function changeTab(tabId) {
    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => {
        content.classList.add('hidden');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('border-b-2', 'border-b-red-500');
    });

    // Show selected tab content
    const selectedContent = document.getElementById(`content${tabId.slice(-1)}`);
    selectedContent.classList.remove('hidden');

    // Add active class to selected tab button
    const selectedButton = document.getElementById(tabId);
    selectedButton.classList.add('border-b-2','border-b-red-500');
}
