// Lab Members Data Loader
// This script automatically loads member information from markdown files

// List of member files (add new files here)
const memberFiles = [
    'people/student1.md',
    'people/student2.md',
    'people/student3.md'
    // Add more member files here
];

// Parse YAML front matter from markdown
function parseMarkdown(content) {
    const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) return null;
    
    const yamlContent = match[1];
    const data = {};
    
    yamlContent.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex !== -1) {
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim();
            data[key] = value;
        }
    });
    
    return data;
}

// Create member card HTML
function createMemberCard(member) {
    const photoPath = member.photo ? `./assets/img/people/${member.photo}` : './assets/img/people/default-avatar.jpg';
    
    // Social links HTML
    let socialLinks = '';
    if (member.homepage) {
        socialLinks += `<a href="${member.homepage}" target="_blank" title="Homepage"><i class="bi bi-house-fill"></i></a> `;
    }
    if (member.google_scholar) {
        socialLinks += `<a href="${member.google_scholar}" target="_blank" title="Google Scholar"><i class="bi bi-mortarboard-fill"></i></a> `;
    }
    if (member.email) {
        socialLinks += `<a href="mailto:${member.email}" title="Email"><i class="bi bi-envelope-fill"></i></a>`;
    }
    
    const coSupervised = member.co_supervised ? `<p class="member-co-supervised">${member.co_supervised}</p>` : '';
    
    return `
        <div class="col-md-2-4 member-card">
            <div class="member-card-inner">
                <img src="${photoPath}" alt="${member.name}" class="member-photo">
                <h6 class="member-name">${member.name}</h6>
                <p class="member-title">${member.title}</p>
                <p class="member-period">${member.period}</p>
                ${coSupervised}
                <div class="member-social">
                    ${socialLinks}
                </div>
            </div>
        </div>
    `;
}

// Load and display members
async function loadMembers() {
    const container = document.getElementById('members-container');
    if (!container) return;
    
    try {
        const members = [];
        
        for (const file of memberFiles) {
            try {
                const response = await fetch(file);
                const content = await response.text();
                const data = parseMarkdown(content);
                
                if (data) {
                    members.push(data);
                }
            } catch (error) {
                console.warn(`Failed to load ${file}:`, error);
            }
        }
        
        // Sort by order
        members.sort((a, b) => (parseInt(a.order) || 999) - (parseInt(b.order) || 999));
        
        // Generate HTML
        let html = '<div class="row">';
        members.forEach(member => {
            html += createMemberCard(member);
        });
        html += '</div>';
        
        container.innerHTML = html;
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

// Load members when page is ready
document.addEventListener('DOMContentLoaded', loadMembers);

