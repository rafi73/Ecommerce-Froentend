<template>
    <div>
        <!-- <div class="loading-wrapper">
            <div class="loading">
                <div class="img"></div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> -->

        <div class="app-wrap">
            <header-component></header-component>
            <div class="app-container">
               <sidebar-component></sidebar-component>
                <!-- END: .app-side -->

                <!-- BEGIN .app-main -->
                <div class="app-main">
                    <!-- BEGIN .main-heading -->
                    <header class="main-heading">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                                    <div class="page-icon">
                                        <i class="icon-laptop_windows"></i>
                                    </div>
                                    <div class="page-title">
                                        <h5>Dashboard</h5>
                                        <h6 class="sub-heading">Welcome to Unify Admin Template</h6>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="input-group form-group search-block">
                                        <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
                                        <span class="input-group-btn">
                                            <button class="btn btn-primary" type="button">Search</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <!-- END: .main-heading -->
                    <!-- BEGIN .main-content -->
                    <div class="main-content">
                        <router-view>

                        </router-view>
                    </div>
                    <!-- END: .main-content -->
                </div>
                <!-- END: .app-main -->
            </div>
            <footer-component></footer-component>
        </div>
    </div>
</template>

<script>

import headerComponent from './components/header'
import sidebarComponent from './components/sidebar'
import footerComponent from './components/footer'
export default {
    components:{
        'header-component': headerComponent, 
        'sidebar-component': sidebarComponent , 
        'footer-component': footerComponent
    }
}
</script>
