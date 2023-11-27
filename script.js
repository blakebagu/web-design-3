$(document).ready(function() {
    const body = $("body");
    const colorInfoContainer = $("<div>").attr("id", "color-info-container");
    body.append(colorInfoContainer);

    const initialMessageContainer = $("<div>").attr("id", "initial-message");
    initialMessageContainer.text("Press any Letter");
    body.append(initialMessageContainer);

    const colorInfo = {
        "q": { name: "Charcoal", code: "#51484f" },
        "w": { name: "White", code: "#ffffff" },
        "e": { name: "Emerald", code: "#50C878" },
        "r": { name: "Red", code: "#FF0000" },
        "t": { name: "Terracotta", code: "#E3735E" },
        "y": { name: "Yellow", code: "#FFFF00" },
        "u": { name: "Ultramarine", code: "#120A8F" },
        "i": { name: "Indigo", code: "#4B0082" },
        "o": { name: "Olive", code: "#808000" },
        "p": { name: "Purple", code: "#800080" },
        "a": { name: "Auburn", code: "#96463d" },
        "s": { name: "Silver", code: "#C0C0C0" },
        "d": { name: "Dandelion", code: "#f0e130" },
        "f": { name: "Fandango", code: "#B53389" },
        "g": { name: "Grey", code: "#808080" },
        "h": { name: "Hansa", code: "#E9D66B" },
        "j": { name: "Jade", code: "#00A86B" },
        "k": { name: "Khaki", code: "#C3B091" },
        "l": { name: "Lavender", code: "#B57EDC" },
        "z": { name: "Zircon", code: "#F4F8FF" },
        "x": { name: "Xanadu", code: "#F1B42F" },
        "c": { name: "Cerulean", code: "#007ba7" },
        "v": { name: "Violet", code: "#240A40" },
        "b": { name: "Blue", code: "#0000FF" },
        "n": { name: "Nectarine", code: "#ff8856" },
        "m": { name: "Mauve", code: "#E0B0FF" }
    };

    // Display initial message for a few seconds
    setTimeout(function() {
        initialMessageContainer.hide();
    }, 3000);

    $(document).keydown(function(event) {
        const key = event.key.toLowerCase();
        let color = colorInfo[key];

        if (!color) return;

        // Change background color
        body.css("background-color", color.code);

        // Display color info in the middle of the screen
        colorInfoContainer.html(`<p>${color.name}</p><p>${color.code}</p>`);
    });
});
