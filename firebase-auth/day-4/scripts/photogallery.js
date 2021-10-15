//initialize materialize compoents that we need an interaction with
document.addEventListener('DOMContentLoaded', () =>{
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    const sidenavmenu = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavmenu);

    const media = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(media);

    // M.AutoInit();

})