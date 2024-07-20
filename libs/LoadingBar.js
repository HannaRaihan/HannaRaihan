class LoadingBar {
    constructor(options) {
        this.domElement = document.createElement("div");
        this.domElement.style.position = 'fixed';
        this.domElement.style.top = '0';
        this.domElement.style.left = '0';
        this.domElement.style.width = '100%';
        this.domElement.style.height = '100%';
        this.domElement.style.background = 'rgba(0, 0, 0, 0.8)'; // Changed to rgba for more flexibility
        this.domElement.style.display = 'flex';
        this.domElement.style.alignItems = 'center';
        this.domElement.style.justifyContent = 'center';
        this.domElement.style.zIndex = '1111';
        
        const container = document.createElement("div");
        container.style.textAlign = 'center';
        
        const welcomeText = document.createElement("div");
        welcomeText.innerText = "Welcome to a VR experience";
        welcomeText.style.color = '#fff';
        welcomeText.style.marginBottom = '20px';
        welcomeText.style.fontSize = '24px';
        container.appendChild(welcomeText);
        
        
        const barBase = document.createElement("div");
        barBase.style.background = 'linear-gradient(to right, #aaa, #ddd)'; // Gradient background
        barBase.style.width = '50%';
        barBase.style.minWidth = '250px';
        barBase.style.borderRadius = '15px';
        barBase.style.height = '20px';
        barBase.style.border = '2px solid #555'; // Added border
        container.appendChild(barBase);
        
        const bar = document.createElement("div");
        bar.style.background = 'linear-gradient(to right, #22a, #44d)'; // Gradient color
        bar.style.width = '0';
        bar.style.borderRadius = '15px';
        bar.style.height = '100%';
        barBase.appendChild(bar);
        
        this.domElement.appendChild(container);
        this.progressBar = bar;
        
        document.body.appendChild(this.domElement);
    }
    
    set progress(delta) {
        const percent = delta * 100;
        this.progressBar.style.width = `${percent}%`;
    }
    
    set visible(value) {
        if (value) {
            this.domElement.style.display = 'flex';
        } else {
            this.domElement.style.display = 'none';
        }
    }
}

export { LoadingBar };
