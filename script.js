const githubBaseUrl = "https://muhammad-umarx.github.io/MuhammadUmarSaeed.github.io";

// Fixed file data structure with proper names
const fileData = {
    designs: [
        {
            name: "Gallery Sunset",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/Screenshot_20251211_103708_Gallery.jpg`
        },
        {
            name: "Gallery Lake",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/Screenshot_20251211_103827_Gallery.jpg`
        },
        {
            name: "Abstract Design 33",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/Untitled design (33).png`
        },
        {
            name: "Highland Cow 5",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/highland cow 5.png`
        },
        {
            name: "Highland Cow Wall Art",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/highland cow wall art.png`
        },
        {
            name: "Minimalist Art",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/i.jpg`
        },
        {
            name: "Creative Portrait",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/lv_0_20251210214330.jpg`
        },
        {
            name: "Painting Artwork",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/painting 10.png`
        },
        {
            name: "Modern Design RT",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/rt.jpg`
        },
        {
            name: "Modern Design RT1",
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/rt1.jpg`
        }
    ],
    posters: [
        {
            name: "Burger Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/Burger PD.png`
        },
        {
            name: "Gallery Art 1",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/Screenshot_20251210_213525_Gallery.jpg`
        },
        {
            name: "Gallery Art 2",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/Screenshot_20251210_213537_Gallery.jpg`
        },
        {
            name: "Coffee Poster Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/coffee poster design.jpg`
        },
        {
            name: "Creative Artwork",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/lv_0_20251210214532.jpg`
        },
        {
            name: "Pizza Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/pizza PD.png`
        },
        {
            name: "Watch Poster Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/watch poster design.png`
        }
    ],
    videos: [
	{ 
	    type: "image",
            imageUrl: `${githubBaseUrl}/Designs/IMG_8516.PNG` 
	},
	{
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/Screenshot_20251211_103754_Gallery.jpg`
        },
	{
            type: "image",
            imageUrl: `${githubBaseUrl}/Designs/Screenshot_20251211_103810_Gallery.jpg`
        },
	{
            name: "Portrait Photo",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/IMG_8317.JPG`
        },
	{
            name: "Gallery Art 4",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/Screenshot_20251211_103740_Gallery.jpg`
        },
	{
            name: "Gallery Art 3",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/Screenshot_20251211_103725_Gallery.jpg`
        },
	{
            name: "Apple Juice Poster",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/Apple juice PD.png`
        },
	{
            name: "Cherry Blast Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/cherry blast PD.png`
        },
	{
            name: "Rani Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/rani design.png`
        },
	{
            name: "Citrus Time Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/citrus time PD.jpg`
        },
	{
            name: "Juice Poster Design",
            type: "image",
            imageUrl: `${githubBaseUrl}/Poster, Banner Designs/juice poster design.png`
        }
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
        'posters': 'Poster/Ad Designs',
        'videos': 'Product Designs'
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

// Load files for a specific folder WITH THUMBNAILS
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
            </div>
        `;
        return;
    }
    
    // Add each file to the list WITH THUMBNAILS
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.onclick = () => viewFile(file);
        
        // Create thumbnail for images
        if (file.type === 'image' && file.imageUrl) {
            // Use the same image URL for thumbnail (it will be resized by CSS)
            fileItem.innerHTML = `
                <div class="file-thumbnail">
                    <img src="${file.imageUrl}" alt="${file.name}" loading="lazy">
                    <div class="file-overlay">
                        <i class="fas fa-expand"></i>
                    </div>
                </div>
            `;
        } else if (file.type === 'video') {
            // For videos, show play icon
            fileItem.innerHTML = `
                <div class="file-thumbnail video-thumbnail">
                    <i class="fas fa-play"></i>
                    ${file.thumbnail ? `<img src="${file.thumbnail}" alt="${file.name}" loading="lazy">` : ''}
                </div>
            `;
        } else {
            // For other file types, show icon
            let iconClass = 'fas fa-file';
            if (file.type === 'document') iconClass = 'fas fa-file-pdf';
            if (file.type === 'vector') iconClass = 'fas fa-draw-polygon';
            
            fileItem.innerHTML = `
                <div class="file-thumbnail">
                    <i class="${iconClass}"></i>
                </div>
            `;
        }
        
        filesList.appendChild(fileItem);
    });
}

function viewFile(file) {
    // Create a file viewer modal
    const viewerModal = document.createElement('div');
    viewerModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    `;
    
    let content = '';
    
    if (file.type === 'image') {
        // For images
        const imageUrl = file.imageUrl || `https://via.placeholder.com/600x400/6C63FF/FFFFFF?text=${encodeURIComponent(file.name)}`;
        content = `
            <img src="${imageUrl}" alt="${file.name}" 
                 style="max-width: 90%; max-height: 80vh; border-radius: 10px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
        `;
    } else if (file.type === 'video') {
        // For videos
        content = `
            <div style="background: white; padding: 40px; border-radius: 10px; text-align: center; max-width: 500px;">
                <i class="fas fa-video" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark); margin-bottom: 10px;">${file.name}</h3>
                <p style="color: var(--gray);">Video file</p>
            </div>
        `;
    }
    
    viewerModal.innerHTML = `
        ${content}
        <button onclick="this.parentElement.remove()" style="
            position: absolute;
            top: 20px;
            right: 30px;
            background: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        ">×</button>
    `;
    
    document.body.appendChild(viewerModal);
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Also close modal when clicking outside the content
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});
