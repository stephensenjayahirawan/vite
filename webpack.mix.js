/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const mix = require('laravel-mix');

let {CleanWebpackPlugin} = require('clean-webpack-plugin');

// paths to clean in public directory
let pathsToClean = [
    'assets/admin/*',
    'assets/common/*',
    'assets/core/*',
    'assets/landing/*',
    'assets/maker/*',
    'assets/retailer/*',
    'assets/vendor/bootstrap-fileinput/*',
    'assets/vendor/intl-tel-input/*',
    'assets/vendor/jquery.flot/*',
    'fonts/*',
    'images/*',
    'static/*',
];

mix.webpackConfig({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: pathsToClean
        })
    ]
});


/*
|--------------------------------------------------------------------------
| Core libraries such as; jquery, bootstrap, popper, lodash, pace,
| fontawesome.
|--------------------------------------------------------------------------
|
*/
mix.js('resources/assets/core/js/app.js', 'public/assets/core/js/app_.js')
    .scripts([
        'public/assets/core/js/app_.js',
        'node_modules/@fortawesome/fontawesome-free/js/brands.js',
        'node_modules/@fortawesome/fontawesome-free/js/solid.js',
        'node_modules/@fortawesome/fontawesome-free/js/regular.js',
        'node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
        'node_modules/pace-js/pace.js'
    ], 'public/assets/core/js/app.js');

mix.sass('resources/assets/core/sass/app.scss', 'public/assets/core/css');

mix.sass('resources/assets/common/sass/dashboard.scss', 'public/assets/common/css/_dashboard.css');

mix.sass('resources/assets/common/sass/edit.scss', 'public/assets/common/css/_edit.css');

mix.scripts([
    'node_modules/chart.js/dist/chart.js',
    'node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js',
    'node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.js',
    'node_modules/randomcolor/randomColor.js',
    'resources/assets/common/js/chart.js',
], 'public/assets/core/js/chart.js');

mix.copy('node_modules/intl-tel-input/build/js/utils.js', 'public/assets/vendor/intl-tel-input/js/utils.js');
mix.copy('node_modules/intl-tel-input/build/img', 'public/assets/vendor/intl-tel-input/img');

mix.copy('resources/assets/vendor/chartjs-plugin-crosshair/chartjs-plugin-crosshair.js', 'public/assets/vendor/chartjs-plugin-crosshair/chartjs-plugin-crosshair.js');

mix.copy('resources/assets/common/js/2fa-activation.js', 'public/assets/common/js/2fa-activation.js');
mix.copy('resources/assets/common/js/2fa-guard.js', 'public/assets/common/js/2fa-guard.js');

mix.copy('resources/assets/common/js/space-analytic.js', 'public/assets/common/js/space-analytic.js');
mix.copy('resources/assets/common/js/battery-status.js', 'public/assets/common/js/battery-status.js');

/*
|--------------------------------------------------------------------------
| For admin
|--------------------------------------------------------------------------
|
*/
mix.scripts([
    'node_modules/nonblockjs/NonBlock.js',
    'node_modules/select2/dist/js/select2.full.js',
    'node_modules/sweetalert2/dist/sweetalert2.js',
    'node_modules/intl-tel-input/build/js/intlTelInput-jquery.js',
    'node_modules/jquery-highlight/jquery.highlight.js',
    'node_modules/clipboard/dist/clipboard.js',
    'node_modules/jquery-toast-plugin/dist/jquery.toast.min.js',
    'node_modules/bs-custom-file-input/dist/bs-custom-file-input.js',
    'node_modules/sortablejs/Sortable.js',
    'node_modules/moment/min/moment-with-locales.js',
    'node_modules/bootstrap-fileinput/js/plugins/piexif.js',
    'node_modules/bootstrap-fileinput/js/plugins/sortable.js',
    'node_modules/bootstrap-fileinput/js/fileinput.js',
    'node_modules/bootstrap-fileinput/themes/fa6/theme.js',
    'node_modules/daterangepicker/daterangepicker.js',
    'node_modules/code-prettify/src/prettify.js',
    'node_modules/sockjs-client/dist/sockjs.js',
    'node_modules/centrifuge/dist/centrifuge.js',
    'node_modules/bs-stepper/dist/js/bs-stepper.js',
    'node_modules/admin-lte/plugins/bootstrap-switch/js/bootstrap-switch.js',
    'node_modules/admin-lte/dist/js/adminlte.js',
    'resources/assets/vendor/list.js/dist/list.js', // todo: check search issue https://github.com/javve/list.js/issues/699
    'resources/assets/common/js/theme.js',
    'resources/assets/common/js/dashboard.js',
    'resources/assets/admin/js/admin.js'
], 'public/assets/admin/js/admin.js');

mix.scripts([
    'node_modules/@googlemaps/markerclusterer/dist/index.min.js',
], 'public/assets/admin/js/map.js');

mix.styles([
    'node_modules/animate.css/animate.css',
    'node_modules/select2/dist/css/select2.css',
    'node_modules/@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.css',
    'node_modules/sweetalert2/dist/sweetalert2.css',
    'node_modules/@sweetalert2/theme-bulma/bulma.css',
    'node_modules/icheck-bootstrap/icheck-bootstrap.css',
    'node_modules/intl-tel-input/build/css/intlTelInput.css',
    'node_modules/jquery-toast-plugin/dist/jquery.toast.min.css',
    'node_modules/bootstrap-fileinput/css/fileinput.css',
    'node_modules/daterangepicker/daterangepicker.css',
    'node_modules/code-prettify/src/prettify.css',
    'node_modules/color-themes-for-google-code-prettify/dist/themes/tomorrow-night-eighties.css',
    'node_modules/bs-stepper/dist/css/bs-stepper.css',
    'public/assets/common/css/_dashboard.css',
    'node_modules/admin-lte/dist/css/adminlte.css',
    'resources/assets/common/css/dashboard.css',
    'resources/assets/admin/css/dashboard.css',
    'resources/assets/admin/css/auth.css',
], 'public/assets/admin/css/admin.css');


mix.scripts([
    'node_modules/cropper/dist/cropper.js',
    'node_modules/typed.js/dist/typed.umd.js',
    'node_modules/bootstrap4-duallistbox/dist/jquery.bootstrap-duallistbox.js',
    'node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js',
    'node_modules/jstree/dist/jstree.js',
    'node_modules/format-to-json/fmt2json.js',
    'resources/assets/common/js/edit.js',
], 'public/assets/admin/js/edit.js');

mix.styles([
    'node_modules/cropper/dist/cropper.css',
    'node_modules/bootstrap4-duallistbox/dist/bootstrap-duallistbox.css',
    'node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css',
    'public/assets/common/css/_edit.css',
    'resources/assets/common/css/edit.css',
    'resources/assets/admin/css/edit.css',
], 'public/assets/admin/css/edit.css');

/*
|--------------------------------------------------------------------------
| For retailer
|--------------------------------------------------------------------------
|
*/
mix.scripts([
    'node_modules/nonblockjs/NonBlock.js',
    'node_modules/select2/dist/js/select2.full.js',
    'node_modules/sweetalert2/dist/sweetalert2.js',
    'node_modules/intl-tel-input/build/js/intlTelInput-jquery.js',
    'node_modules/jquery-highlight/jquery.highlight.js',
    'node_modules/clipboard/dist/clipboard.js',
    'node_modules/jquery-toast-plugin/dist/jquery.toast.min.js',
    'node_modules/bs-custom-file-input/dist/bs-custom-file-input.js',
    'node_modules/sortablejs/Sortable.js',
    'node_modules/summernote/dist/summernote-bs4.js',
    'node_modules/summernote/dist/lang/summernote-ja-JP.js',
    'node_modules/bootstrap-fileinput/js/plugins/piexif.js',
    'node_modules/bootstrap-fileinput/js/plugins/sortable.js',
    'node_modules/bootstrap-fileinput/js/fileinput.js',
    'node_modules/bootstrap-fileinput/themes/fa6/theme.js',
    'node_modules/moment/min/moment-with-locales.js',
    'node_modules/daterangepicker/daterangepicker.js',
    'node_modules/admin-lte/plugins/bootstrap-switch/js/bootstrap-switch.js',
    'node_modules/centrifuge/dist/centrifuge.js',
    'node_modules/bs-stepper/dist/js/bs-stepper.js',
    'node_modules/admin-lte/dist/js/adminlte.js',
    'resources/assets/vendor/list.js/dist/list.js', // todo: same as admin.js
    'resources/assets/common/js/theme.js',
    'resources/assets/common/js/dashboard.js',
    'resources/assets/retailer/js/retailer.js'
], 'public/assets/retailer/js/retailer.js');

mix.styles([
    'node_modules/animate.css/animate.css',
    'node_modules/select2/dist/css/select2.css',
    'node_modules/@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.css',
    'node_modules/sweetalert2/dist/sweetalert2.css',
    'node_modules/@sweetalert2/theme-bulma/bulma.css',
    'node_modules/icheck-bootstrap/icheck-bootstrap.css',
    'node_modules/intl-tel-input/build/css/intlTelInput.css',
    'node_modules/jquery-toast-plugin/dist/jquery.toast.min.css',
    'node_modules/bootstrap-fileinput/css/fileinput.css',
    'node_modules/daterangepicker/daterangepicker.css',
    'node_modules/bs-stepper/dist/css/bs-stepper.css',
    'public/assets/common/css/_dashboard.css',
    'node_modules/admin-lte/dist/css/adminlte.css',
    'resources/assets/common/css/dashboard.css',
    'resources/assets/retailer/css/dashboard.css',
    'resources/assets/retailer/css/auth.css',
], 'public/assets/retailer/css/retailer.css');

mix.scripts([
    'node_modules/cropper/dist/cropper.js',
    'node_modules/bootstrap4-duallistbox/dist/jquery.bootstrap-duallistbox.js',
    'node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js',
    'node_modules/jstree/dist/jstree.js',
    'resources/assets/common/js/edit.js',
], 'public/assets/retailer/js/edit.js');

mix.styles([
    'node_modules/cropper/dist/cropper.css',
    'node_modules/bootstrap4-duallistbox/dist/bootstrap-duallistbox.css',
    'node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css',
    'public/assets/common/css/_edit.css',
    'resources/assets/common/css/edit.css',
    'resources/assets/retailer/css/edit.css',
], 'public/assets/retailer/css/edit.css');


/*
|--------------------------------------------------------------------------
| For maker
|--------------------------------------------------------------------------
|
*/
mix.scripts([
    'node_modules/nonblockjs/NonBlock.js',
    'node_modules/select2/dist/js/select2.full.js',
    'node_modules/sweetalert2/dist/sweetalert2.js',
    'node_modules/intl-tel-input/build/js/intlTelInput-jquery.js',
    'node_modules/jquery-highlight/jquery.highlight.js',
    'node_modules/clipboard/dist/clipboard.js',
    'node_modules/jquery-toast-plugin/dist/jquery.toast.min.js',
    'node_modules/bs-custom-file-input/dist/bs-custom-file-input.js',
    'node_modules/sortablejs/Sortable.js',
    'node_modules/summernote/dist/summernote-bs4.js',
    'node_modules/summernote/dist/lang/summernote-ja-JP.js',
    'node_modules/bootstrap-fileinput/js/plugins/piexif.js',
    'node_modules/bootstrap-fileinput/js/plugins/sortable.js',
    'node_modules/bootstrap-fileinput/js/fileinput.js',
    'node_modules/bootstrap-fileinput/themes/fa6/theme.js',
    'node_modules/moment/min/moment-with-locales.js',
    'node_modules/daterangepicker/daterangepicker.js',
    'node_modules/admin-lte/plugins/bootstrap-switch/js/bootstrap-switch.js',
    'node_modules/centrifuge/dist/centrifuge.js',
    'node_modules/admin-lte/dist/js/adminlte.js',
    'resources/assets/vendor/list.js/dist/list.js',
    'resources/assets/common/js/theme.js',
    'resources/assets/common/js/dashboard.js',
    'resources/assets/maker/js/maker.js'
], 'public/assets/maker/js/maker.js');

mix.styles([
    'node_modules/animate.css/animate.css',
    'node_modules/select2/dist/css/select2.css',
    'node_modules/@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.css',
    'node_modules/sweetalert2/dist/sweetalert2.css',
    'node_modules/@sweetalert2/theme-bulma/bulma.css',
    'node_modules/icheck-bootstrap/icheck-bootstrap.css',
    'node_modules/intl-tel-input/build/css/intlTelInput.css',
    'node_modules/jquery-toast-plugin/dist/jquery.toast.min.css',
    'node_modules/bootstrap-fileinput/css/fileinput.css',
    'node_modules/daterangepicker/daterangepicker.css',
    'public/assets/common/css/_dashboard.css',
    'node_modules/admin-lte/dist/css/adminlte.css',
    'resources/assets/common/css/dashboard.css',
    'resources/assets/maker/css/dashboard.css',
    'resources/assets/maker/css/auth.css',
], 'public/assets/maker/css/maker.css');


mix.scripts([
    'node_modules/cropper/dist/cropper.js',
    'node_modules/bootstrap4-duallistbox/dist/jquery.bootstrap-duallistbox.js',
    'node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js',
    'node_modules/jstree/dist/jstree.js',
    'resources/assets/common/js/edit.js',
], 'public/assets/maker/js/edit.js');

mix.styles([
    'node_modules/cropper/dist/cropper.css',
    'node_modules/bootstrap4-duallistbox/dist/bootstrap-duallistbox.css',
    'node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css',
    'public/assets/common/css/_edit.css',
    'resources/assets/common/css/edit.css',
    'resources/assets/maker/css/edit.css',
], 'public/assets/maker/css/edit.css');


/*
|--------------------------------------------------------------------------
| For landing page
|--------------------------------------------------------------------------
|
*/
mix.scripts([
    'node_modules/lightslider/dist/js/lightslider.js',
    'node_modules/particles.js/particles.js',
    'node_modules/admin-lte/dist/js/adminlte.js',
    'resources/assets/landing/js/landing.js',
], 'public/assets/landing/js/landing.js');

mix.styles([
    'node_modules/lightslider/dist/css/lightslider.css',
    'node_modules/icheck-bootstrap/icheck-bootstrap.css',
    'node_modules/admin-lte/dist/css/adminlte.css',
    'resources/assets/landing/css/landing.css'
], 'public/assets/landing/css/landing.css');

mix.copy('resources/assets/landing/js/particles.json', 'public/assets/landing/js/particles.json');

// Flot chart resources
mix.copy('node_modules/admin-lte/plugins/flot/jquery.flot.js', 'public/assets/vendor/jquery.flot/js/jquery.flot.js');


/*
|--------------------------------------------------------------------------
| Images & Static & Fonts files
|--------------------------------------------------------------------------
|
*/

mix.copy('resources/assets/images/*', 'public/images')
    .copy('resources/assets/images/vendor/slick-carousel/slick/*', 'public/images/vendor/slick-carousel/slick');
mix.copy('resources/assets/static/*', 'public/static');
mix.copyDirectory('resources/fonts', 'public/fonts');

mix.copy('resources/assets/vendor/bootstrap-fileinput/js/locales', 'public/assets/vendor/bootstrap-fileinput/js/locales');


/**
 * For production, mix will generate a version number for each compilation to load the new js and css
 * easily on the browser. The version along with the file location will be stored under
 * public/mix-manifest.json file. Version will be generated when you run the minification as `npm run prod`
 */
if (mix.inProduction()) {
    mix.version();
}

/**
 * BrowserSync will automatically monitor your files for changes, and insert your changes into
 * the browser - all without requiring a manual refresh. This is for development purpose.
 * Now, boot up the dev server in your local, run: `npm run watch`
 */
mix.browserSync({
    files: [
        'public/assets/**/*.css',
        'public/assets/**/*.js',
        'resources/views/**/*.blade.php',
    ],
    open: false,
    proxy: 'local-console.raicart.io',
    notify: true,
    injectChanges: true,
    online: false
});
