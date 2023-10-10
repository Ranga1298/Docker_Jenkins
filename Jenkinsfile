pipeline {
    agent any

    environment {
        // Define your Docker image and tag
        imageName1 = "ranga1298/app1_jenkins"
        imageName2 =  "ranga1298/app2_jenkins"
        imageTag = "latest"
        imageTag2 = "latest2"
        image1Dockerfile = "app1/Dockerfile"
        image2Dockerfile = "app2/Dockerfile"
        dockerCredentialsId = 'Docker-Credentials'
       SSH_KEY = credentials('aws-app1')
    }

    stages {
        stage('Build Docker Image1') {
            steps {
                script {
                    // Build the Docker image
                    withCredentials([usernamePassword(credentialsId: dockerCredentialsId, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]){
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                        sh "docker build -t ${imageName1}:${imageTag} -f ${image1Dockerfile} ."
                    }
                }
            }
        }
        stage('Build Docker Image2') {
            steps {
                script {
                    // Build the Docker image
                    withCredentials([usernamePassword(credentialsId: dockerCredentialsId, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]){
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                        sh "docker build -t ${imageName2}:${imageTag2} -f ${image2Dockerfile} ."
                    }
                }
            }
        }

        stage('Push Docker Image1') {
            steps {
                script {
                    

                    // Push the Docker image to the registry
                    sh "docker push ${imageName1}:${imageTag}"

                    // Log out from Docker Hub
                }
            }
        }
        stage('Push Docker Image2') {
            steps {
                script {
                    

                    // Push the Docker image to the registry
                    sh "docker push ${imageName2}:${imageTag2}"

                }
            }
        }
        stage("Pull and Deploy Image 1"){
            steps {
                script {
                    sshagent(credentials: ["${ec2instancecredentialId}"]){
                        sh """
                        ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no ec2-user@18.217.20.90 << EOF
                        docker pull \${imageName1}
                        docker run -d --name sum -p 6000:3000 \${imageName1}
                         >> EOF
                        """
                    }
                }  
            }
        }
    }
}
