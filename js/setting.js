const color = [
    {
        name: "pink",
        code: "#fb839e",
        url: "CSS/skin/pink.css",
    },
    {
        name: "light blue",
        code: "#3e99f4",
        url: "CSS/skin/light-blue.css",
    },
    {
        name: "light green",
        code: "#0dcebd",
        url: "CSS/skin/light-green.css",
    },
    {
        name: "red",
        code: "#cc3a3b",
        url: "CSS/skin/red.css",
    },
    {
        name: "yellow",
        code: "#ff9801",
        url: "CSS/skin/yellow.css",
    },
];

$(document).ready(function () {
    setColors();
    function setColors() {
        // console.log("hi colors setting")
        for (let i = 0; i < color.length; i++) {
            // console.log(color[i].name)
            const span = document.createElement("span");
            span.style.backgroundColor = color[i].code;
            $(".colors").append(span)
        }
    }

    // change of element color
    $(".colors span").click(function ()
         {
            const index = $(this).index();
            // console.log(index)
            console.log("color: ", color[index])
            // console.log("color name: ", color[index].name)
            $(".alternate-style").attr("href", color[index].url);
    });

    //theme light & dark mode
    $(".theme-mode").change(function ()
        {
        console.log($(this).val());
        if ($(this).val() === "light") {
            $("body").removeClass("dark");
        }else {
            $("body").addClass("dark");
        }
    });

    //toggle setting box
    $(".s-toggle-btn").click(function ()
        {
        $(".setting").toggleClass("open");
    });
});