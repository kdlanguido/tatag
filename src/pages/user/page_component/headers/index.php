<nav class="navbar navbar-expand-lg bg-body-tertiary pt-0" data-bs-theme="dark" style="background:#000 !important">
    <div class="container-fluid d-flex justify-content-between pt-2">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav__user_nav_bar" aria-controls="nav__user_nav_bar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav__user_nav_bar">
            <ul class="navbar-nav me-auto mt-2 mb-2 mb-lg-0" style="font-family:'SLD2019'; font-size:15pt">
                <li class="nav-item">
                    <a class="header-link nav-link d-flex align-items-center active" goto="page_home">
                        <i class="fa-solid fa-house d-block d-md-none me-2 fa-fw"></i>
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="header-link nav-link d-flex align-items-center" goto="page_events">
                        <i class="fa-solid fa-calendar-day d-block d-md-none me-2 fa-fw"></i>
                        Events
                    </a>
                </li>
                <li class="nav-item">
                    <a class="header-link nav-link d-flex align-items-center" goto="page_about">
                        <i class="fa-solid fa-circle-question d-block d-md-none me-2 fa-fw"></i>
                        About Us
                    </a>
                </li>
                <li class="nav-item">
                    <a class="header-link nav-link d-flex align-items-center" mainFunction="loadMembers" goto="page_members">
                        <i class="fa-solid fa-user-group d-block d-md-none me-2 fa-fw"></i>
                        Members
                    </a>
                </li>
            </ul>
            <div class="d-flex justify-content-center mt-md-0 mt-3" role="search">
                <button class="btn me-2" style="color:#E9C001; font-weight:400" >Login</button>
                <button class="btn text-dark" style="background:#E9C001; font-weight:600; font-size:11pt; font-weight:400" id="btn__h_register">Join Tatag Fam!</button>
            </div>
        </div>
    </div>
</nav>

<script src="src/pages/user/page_component/headers/index.js"></script>