pipeline {
    agent any

    environment {
        // Define your Docker image and tag
        imageName = "ranga1298/docker_jenkins"
        imageTag = "latest"
        dockerFile = "Dockerfile"
        dockerCredentialsId = 'ranga1298/******'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    withCredentials([usernamePassword(credentialsId: dockerCredentialsId, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]){
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                        sh "docker build -t ${imageName}:${imageTag} -f ${dockerFile} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    

                    // Push the Docker image to the registry
                    sh "docker push ${imageName}:${imageTag}"

                    // Log out from Docker Hub
                    sh "docker logout"
                }
            }
        }
    }

    post {
        always {
            // Clean up by removing the local Docker image
            sh "docker rmi ${imageName}:${imageTag}"
        }
    }
}
