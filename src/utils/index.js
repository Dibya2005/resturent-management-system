
export const getBackgroundColor = () => {
    const colors = [
        "#E8D5B7", // warm sand
        "#D4C5A9", // muted khaki
        "#C9B8E8", // soft lavender
        "#B8D4E3", // sky blue
        "#D4B8C9", // dusty rose
        "#B8E3D4", // mint green
        "#E3D4B8", // warm beige
        "#C9D4B8", // sage green
        "#E3B8C9", // blush pink
        "#B8C9E3", // powder blue
        "#D4E3B8", // light olive
        "#E3C9B8", // peach
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}
export const getAvtarname = (name) => {
    if (!name) return "";
    const names = name.split(" ").map(word => word[0]).join("").toUpperCase();
    return names;
}
export const formatDate = (date) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
};