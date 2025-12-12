// Simple file data structure - REPLACE THIS WITH YOUR ACTUAL FILES
const fileData = {
    designs: [
        { name: "Logo Design", size: "2.4 MB", type: "image" },
        { name: "Business Card", size: "1.8 MB", type: "image" },
        { name: "Social Media Post", size: "1.5 MB", type: "image" },
        { name: "Website Mockup", size: "3.2 MB", type: "image" },
        { name: "Brochure Design", size: "4.1 MB", type: "document" },
        { name: "Icon Set", size: "5.3 MB", type: "vector" }
    ],
    posters: [
        { name: "Concert Poster", size: "3.8 MB", type: "image" },
        { name: "Movie Poster", size: "4.2 MB", type: "image" },
        { name: "Event Banner", size: "5.1 MB", type: "image" },
        { name: "Sale Poster", size: "2.9 MB", type: "image" }
    ],
    videos: [
        { name: "Product Demo Video", size: "24.5 MB", type: "video" },
        { name: "Social Media Ad", size: "18.3 MB", type: "video" },
        { name: "Event Highlights", size: "42.7 MB", type: "video" },
        { name: "Tutorial Video", size: "36.8 MB", type: "video" }
    ]
};

// DOM Elements
const modal = document.getElementById('folder-modal');
const modalTitle = document.getElementById('modal-title');
const filesList = document.getElementById('files-list');
const designsCount = document.getElementById('designs-count');
const postersCount = document.getElementById('posters-count');
const videosCount = document.getElementById('videos-count');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Update file counts
    updateFileCounts();
});

// Update file counts display
function updateFileCounts() {
    designsCount.textContent = `${fileData.designs.length} files`;
    postersCount.textContent = `${fileData.posters.length} files`;
    videosCount.textContent = `${fileData.videos.length} files`;
}

// Open folder modal
function openFolder(folderType) {
    const folderNames = {
        'designs': 'My Designs',
        'posters': 'Posters & Banners',
        'videos': 'Video Edits'
    };
    
    const folderIcons = {
        'designs': 'fas fa-paint-brush',
        'posters': 'fas fa-image',
        'videos': 'fas fa-video'
    };
    
    // Set modal title with icon
    modalTitle.innerHTML = `<i class="${folderIcons[folderType]}"></i> ${folderNames[folderType]}`;
    
    // Load files for this folder
    loadFolderFiles(folderType);
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Load files for a specific folder
function loadFolderFiles(folderType) {
    const files = fileData[folderType];
    
    // Clear current files
    filesList.innerHTML = '';
    
    if (files.length === 0) {
        // Show "no files" message
        filesList.innerHTML = `
            <div class="no-files">
                <i class="fas fa-folder-open"></i>
                <p>No files found in this folder</p>
                <p>Add your files to the "${folderType}" folder</p>
            </div>
        `;
        return;
    }
    
    // Add each file to the list
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.onclick = () => viewFile(file);
        
        // Get icon based on file type
        let iconClass = 'fas fa-file';
        if (file.type === 'image') iconClass = 'fas fa-image';
        if (file.type === 'video') iconClass = 'fas fa-video';
        if (file.type === 'document') iconClass = 'fas fa-file-pdf';
        if (file.type === 'vector') iconClass = 'fas fa-draw-polygon';
        
        fileItem.innerHTML = `
            <div class="file-icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="file-name">${file.name}</div>
            <div class="file-size">${file.size}</div>
        `;
        
        filesList.appendChild(fileItem);
    });
}

// View file (simple alert for demo)
function viewFile(file) {
    alert(`Viewing: ${file.name}\nSize: ${file.size}\n\nIn a real implementation, this would open the actual file.`);
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});

// Function to add a file to a folder
function addFile(folderType, fileName, fileSize, fileType) {
    fileData[folderType].push({
        name: fileName,
        size: fileSize,
        type: fileType
    });
    
    // Update the display
    updateFileCounts();
    
    // If this folder is currently open, refresh the view
    const currentFolder = modalTitle.textContent.toLowerCase();
    if (currentFolder.includes(folderType)) {
        loadFolderFiles(folderType);
    }
}

// Example of how to add a new file (for your reference)
// addFile('designs', 'New Logo', '3.2 MB', 'image');