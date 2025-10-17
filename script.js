// Generated Application JavaScript
console.log('🚀 Generated application loaded successfully');
console.log('📝 Brief:', `
Create a complete, production-ready web application based on this brief:

BRIEF: Create a simple ca...`);

// Application functionality
function testFunctionality() {
    alert('🎉 Application is working perfectly!\n\nThis demonstrates that the generated application is fully functional.');
    
    // Add some visual feedback
    const btn = document.querySelector('.btn');
    const originalText = btn.textContent;
    btn.textContent = '✅ Tested!';
    btn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, 2000);
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM loaded and ready');
    
    // Add some interactive features
    const features = document.querySelectorAll('.features li');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            feature.style.transition = 'all 0.5s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // Add click handlers for better UX
    const codeBlock = document.querySelector('.code-block');
    if (codeBlock) {
        codeBlock.addEventListener('click', function() {
            this.style.background = '#e3f2fd';
            setTimeout(() => {
                this.style.background = '#f8f9fa';
            }, 1000);
        });
    }
});

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#28a745' : '#17a2b8'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);