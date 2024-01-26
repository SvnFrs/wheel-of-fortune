function spinWheel() {
    // Define the items and their respective percentages
    const items = [
        { name: 'Banh Trang', percent: 2.5 },
        { name: 'Nuoc Sam', percent: 2.5 },
        { name: 'Trung Ga Luoc', percent: 5 },
        { name: 'Trung Cut Luoc', percent: 5 },
        { name: 'Sticker', percent: 15 },
        { name: 'Chuc Ban May Man Lan Sau', percent: 70 }
    ];

    // Calculate total percentage
    const totalPercent = items.reduce((sum, item) => sum + item.percent, 0);

    // Generate a random number within the total range
    const randomNumber = Math.random() * totalPercent;

    // Determine the winning item based on the random number
    let currentPercent = 0;
    for (const item of items) {
        currentPercent += item.percent;
        if (randomNumber <= currentPercent) {
            // Check if the item is 'Banh Trang' and switch it to 'Trung Ga Luoc'
            const winningItem = item.name === 'Banh Trang' ? 'Trung Ga Luoc' : item.name;
            
            // Display or use the winning item as needed
            console.log('Congratulations! You won:', winningItem);
            break;
        }
    }
}

// Example usage:
// Call this function when the spin button is clicked
document.getElementById('spin').addEventListener('click', spinWheel);
