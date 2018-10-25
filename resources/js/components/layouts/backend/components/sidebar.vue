<template>
    <aside class="app-side" id="app-side">
        <div class="side-content ">
            <div class="user-profile">
                <img src="img/user.png" class="profile-thumb" alt="User Thumb">
                <h6 class="profile-name">Sofia Vergara</h6>
                <ul class="profile-actions">
                    <li>
                        <a href="#">
                            <i class="icon-social-skype"></i>
                            <span class="count-label red"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon-social-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="login.html">
                            <i class="icon-export"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <nav class="side-nav">
                <ul class="unifyMenu" id="unifyMenu">
                    <sidebar-menu-item :routes='routes'></sidebar-menu-item>
                   
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
import menuItem from './sidebarMenuItem'
export default {
    name: 'sidebar',
    components: {
        'sidebar-menu-item': menuItem
    },
    computed:{
        routes(){
            return this.$routes[0].children
        }
    }
}
</script>
