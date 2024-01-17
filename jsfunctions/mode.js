document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('themeSelector');
    const nav = document.getElementById('header-nav');
    const side = document.getElementById('side-panel');
    const artist = document.getElementsByClassName('artist-card');
    const playlist = document.getElementsByClassName('playlist-card');
    const ftxt = document.getElementsByClassName('footer-text')[0];
    const footer = document.getElementById('footer');
    const contactdiv = document.getElementsByClassName('modal-div')[0];
    window.onload = function () {
        applyTheme(sessionStorage.getItem("theme"));
    };

    themeSelector.addEventListener('change', function () {
        sessionStorage.setItem("theme", themeSelector.value);
        applyTheme(themeSelector.value);
    });

    
    
    function applyTheme(theme) {
        switch (theme) {
            case 'default':
                nav.style.backgroundColor="#000000";
                side.style.backgroundColor="rgba(195, 195, 195, 0.152)";
                const links1Array = side.children[1].children;
                for (let i = 0; i < links1Array.length; i++) {
                    links1Array[i].style.color = 'white';
                    links1Array[i].style.fontWeight = 'bold'; 
                }
                for (let i = 0; i < artist.length; i++) {
                    artist[i].style.backgroundColor = '#2a2a2a';
                    artist[i].style.color = 'white';
                }
                for (let i = 0; i < playlist.length; i++) {
                    playlist[i].style.backgroundColor = '#2a2a2a';
                    playlist[i].style.color = 'white';
                }
                footer.style.backgroundColor = 'black';
                ftxt.children[0].style.color = 'white'
                contactdiv.style.backgroundColor = "#ffffff1d"
                document.getElementsByClassName("contact-subheader")[0].style.color = "white"
                break;

                case 'light':
                    nav.style.backgroundColor="white";
                side.style.backgroundColor="white";
                const linksArray = side.children[1].children;
                for (let i = 0; i < linksArray.length; i++) {
                    linksArray[i].style.color = 'black';
                    linksArray[i].style.fontWeight = 'bold'; 
                }
                for (let i = 0; i < artist.length; i++) {
                    artist[i].style.backgroundColor = 'white';
                    artist[i].style.color = 'black';
                }
                for (let i = 0; i < playlist.length; i++) {
                    playlist[i].style.backgroundColor = 'white';
                    playlist[i].style.color = 'black';
                }
                footer.style.backgroundColor = 'white';
                ftxt.children[0].style.color = 'black'
                contactdiv.style.backgroundColor = "white"
                document.getElementsByClassName("contact-subheader")[0].style.color = "black"
                console.log("night");
                break;


                case 'blue':
                    nav.style.backgroundColor="#192a59";
                    side.style.backgroundColor="#192a59";
                    const links2Array = side.children[1].children;
                    for (let i = 0; i < links2Array.length; i++) {
                        links2Array[i].style.color = 'white';
                        links2Array[i].style.fontWeight = 'bold'; 
                    }
                    for (let i = 0; i < artist.length; i++) {
                        artist[i].style.backgroundColor = '#192a59';
                        artist[i].style.color = 'white';
                    }
                    for (let i = 0; i < playlist.length; i++) {
                        playlist[i].style.backgroundColor = '#192a59';
                        playlist[i].style.color = 'white';
                    }
                    footer.style.backgroundColor = '#192a59';
                    ftxt.children[0].style.color = 'white'
                    contactdiv.style.backgroundColor = "#192a59"
                    console.log("custom");
                    break;


                case 'green':
                    nav.style.backgroundColor="#22593f ";
                    side.style.backgroundColor="#22593f ";
                    const links3Array = side.children[1].children;
                    for (let i = 0; i < links3Array.length; i++) {
                        links3Array[i].style.color = 'white';
                        links3Array[i].style.fontWeight = 'bold'; 
                    }
                    for (let i = 0; i < artist.length; i++) {
                        artist[i].style.backgroundColor = '#22593f';
                        artist[i].style.color = 'white';
                    }
                    for (let i = 0; i < playlist.length; i++) {
                        playlist[i].style.backgroundColor = '#22593f';
                        playlist[i].style.color = 'white';
                    }
                    footer.style.backgroundColor = "#22593f ";
                    ftxt.children[0].style.color = 'white'
                    contactdiv.style.backgroundColor = "#22593f "
                    console.log("custom");
                    break;


                    default:
                        break;
                    }
                }
    });
            