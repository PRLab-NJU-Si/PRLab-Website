// Lab Members Data Loader
// This script loads member information from members-data.js

// Create member card HTML
function createMemberCard(member) {
    // member.photo is already a complete path in members-data.js
    const photoPath = member.photo || './assets/img/people/default-avatar.jpg';
    
    // Social links HTML
    let socialLinks = '';
    if (member.homepage && member.homepage.trim() !== '') {
        socialLinks += `<a href="${member.homepage}" target="_blank" title="Homepage"><i class="bi bi-house-fill"></i></a> `;
    }
    if (member.google_scholar && member.google_scholar.trim() !== '') {
        socialLinks += `<a href="${member.google_scholar}" target="_blank" title="Google Scholar"><i class="bi bi-mortarboard-fill"></i></a> `;
    }
    if (member.email && member.email.trim() !== '') {
        socialLinks += `<a href="mailto:${member.email}" title="Email"><i class="bi bi-envelope-fill"></i></a>`;
    }
    if (member.github && member.github.trim() !== '') {
        socialLinks += `<a href="${member.github}" target="_blank" title="GitHub"><i class="bi bi-github"></i></a>`;
    }
    
    const coSupervised = member.co_supervised ? `<p class="member-co-supervised">${member.co_supervised}</p>` : '';
    const affiliation = member.affiliation ? `<p class="member-affiliation">${member.affiliation}</p>` : '';
    
    return `
        <div class="member-card">
            <div class="member-card-inner">
                <img src="${photoPath}" alt="${member.name}" class="member-photo">
                <div class="member-info">
                    <h6 class="member-name">${member.name}</h6>
                    <p class="member-title">${member.title}</p>
                    <p class="member-period">${member.period}</p>
                    ${coSupervised}
                    ${affiliation}
                    ${socialLinks ? `<div class="member-social">${socialLinks}</div>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Load and display members
function loadMembers() {
    const container = document.getElementById('members-container');
    if (!container) return;
    
    try {
        // Check if labMembers is available
        if (typeof labMembers === 'undefined') {
            console.error('labMembers data not found. Make sure members-data.js is loaded.');
            container.innerHTML = '<p style="text-align: center; color: red;">Failed to load members data.</p>';
            return;
        }
        
        // Collect all members from different categories
        const allMembers = [];
        
        // Add PhD students
        if (labMembers.phd_students) {
            allMembers.push(...labMembers.phd_students);
        }
        
        // Add Master students
        if (labMembers.master_students) {
            allMembers.push(...labMembers.master_students);
        }
        
        // Add Research interns
        if (labMembers.research_interns) {
            allMembers.push(...labMembers.research_interns);
        }
        
        // Add Visiting scholars
        if (labMembers.visiting_scholars) {
            allMembers.push(...labMembers.visiting_scholars);
        }
        
        // Generate HTML
        let html = '<div class="row">';
        allMembers.forEach(member => {
            html += createMemberCard(member);
        });
        html += '</div>';
        
        container.innerHTML = html;
    } catch (error) {
        console.error('Error loading members:', error);
        container.innerHTML = '<p style="text-align: center; color: red;">Error loading members.</p>';
    }
}

// Load members when page is ready
document.addEventListener('DOMContentLoaded', loadMembers);

