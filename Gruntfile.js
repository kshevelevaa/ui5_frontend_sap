module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-openui5");

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8011,
                    livereload: false,
                    keepalive: true
                }
            }
        },

        openui5_connect: {
            server: {
                options: {
                    appresources: "src/myapp",
                    resources: "D:/sapui5-sdk-1.60.44/resources",
                    testresources: "D:/sapui5-sdk-1.60.44/test-resources"
                }
            }
        }
    });

    grunt.registerTask("serve", function (){
        grunt.task.run([
            "openui5_connect:server"
            ]);
    });
};