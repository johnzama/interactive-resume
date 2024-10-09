pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Checkout the code from the Git repository
                git 'https://github.com/your-username/interactive-resume.git' // Replace with your repo URL
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    dockerImage = docker.build("john-zama/interactive-resume")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run the Docker container
                script {
                    dockerImage.run('-p 8027:80')
                }
            }
        }
    }
    
    post {
        always {
            // Clean up after the pipeline execution
            echo 'Pipeline finished'
        }
    }
}
