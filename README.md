# Dockerized Simple Polling Application Deployed in Amazon Public ECR

This repository contains a Python web application that has been dockerized and uploaded to Amazon Elastic Container Registry (ECR). The application can be pulled from ECR and run on any compatible machine, such as an Amazon EC2 instance.

## Application Overview

The Polling App is a simple web application built with Flask that allows users to participate in polls by selecting their favorite programming language. It's a basic example of how to create a web application with Flask for conducting polls. It also listens on port 8080.

## Steps Taken

1. **Creating the App:**
   The web application was created using Python, HTML, Js, and CSS to include logic for displaying a poll.

2. **Dockerization:**
   The application was dockerized by creating a Dockerfile. The Dockerfile specifies the base image, copies the application code into the container, and configures the application's dependencies and settings.

3. **Uploading to Amazon ECR:**
   The dockerized image was uploaded to Amazon ECR, a fully managed Docker container registry. This step involved creating an ECR repository, authenticating Docker with the ECR registry, and pushing the image to the repository.

4. **Running on EC2 or Any Compatible Machine:**
   Once the image is in the ECR repository, it can be pulled and run on any compatible machine. For example, you can run the application on an Amazon EC2 instance by pulling the image from the ECR repository and starting a Docker container.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your local machine or target machine.
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate AWS credentials and region.

## Steps to Run the Application

1. **Pull the Image from ECR:**
   Run the following command to authenticate Docker with your ECR registry and pull the docker image:

   ```bash
   docker pull public.ecr.aws/d7s2f1j0/flask-polling-app:latest
   ```

2. **Run the Docker Container:**
   Run the pulled image in a Docker container. Make sure to map the container port to a host port if necessary. Replace `<your-ec2-public-ip>` with the actual public IP or DNS of your EC2 instance.

   ```bash
   docker run -d -p 8080:8080 public.ecr.aws/d7s2f1j0/flask-polling-app:latest
   ```

3. **Access the Application:**
   You may now access it by opening a web browser and navigating to:

   ```
   http://<your-ec2-public-ip>:8080
   ```

## Notes

- This is a simplified example for educational purposes.
- Ensure proper security group settings to allow traffic on the required ports.
- AWS credentials and permissions must be configured correctly for ECR access.
- Remember to clean up resources when they are no longer needed.
