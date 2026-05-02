# 🚀 Kubernetes Notes App (Full DevOps Project)

## 📌 Project Overview

This project is a **full-stack Notes Application** deployed on Kubernetes with a complete DevOps pipeline.

It includes:

* Frontend (UI)
* Backend (API)
* Database (MongoDB)
* CI/CD using GitHub Actions
* Monitoring using Prometheus & Grafana

---

## 🏗️ Architecture

User → Frontend → Backend → MongoDB
↓
Kubernetes Cluster

---

## ⚙️ Tech Stack

* Frontend: HTML / CSS / JavaScript
* Backend: Node.js
* Database: MongoDB
* Containerization: Docker
* Orchestration: Kubernetes
* CI/CD: GitHub Actions
* Monitoring: Prometheus + Grafana

---

## 📂 Project Structure

```
project/
│── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
│── frontend/
│   ├── index.html
│   └── Dockerfile
│
│── k8s/
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── mongo-deployment.yaml
│   ├── services.yaml
│
│── .github/workflows/
│   └── deploy.yml
```

---

## 🚀 Features

✅ Full-stack application
✅ Dockerized services
✅ Kubernetes deployment
✅ CI/CD pipeline automation
✅ Monitoring with Grafana dashboards
✅ Scalable architecture

---

## 🔄 CI/CD Pipeline

Implemented using GitHub Actions:

1. Code push to GitHub
2. Build Docker images
3. Push images to Docker Hub
4. Deploy to Kubernetes cluster

---

## 📊 Monitoring

Monitoring is implemented using:

* Prometheus (metrics collection)
* Grafana (dashboard visualization)

### 📈 Metrics Tracked:

* CPU usage
* Memory usage
* Pod performance
* Cluster health

---

## 🧪 How to Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/k8s-notes-app.git
cd k8s-notes-app
```

### 2️⃣ Build Docker Images

```bash
docker build -t backend ./backend
docker build -t frontend ./frontend
```

### 3️⃣ Apply Kubernetes Manifests

```bash
kubectl apply -f k8s/
```

### 4️⃣ Access Application

```bash
kubectl port-forward svc/frontend-service 30009:80
```

Open:

```
http://localhost:30009
```

---

## 📊 Monitoring Setup

```bash
helm install monitoring prometheus-community/kube-prometheus-stack
```

Access Grafana:

```bash
kubectl port-forward svc/monitoring-grafana 3001:80
```

---

## 🔐 Grafana Login

* Username: admin
* Password:

```bash
kubectl get secret monitoring-grafana -o jsonpath="{.data.admin-password}" | base64 --decode
```

---

## 📸 Screenshots (Add your images here)

* Application UI
* Kubernetes Pods
* Grafana Dashboard

---

## 🎯 Learning Outcomes

* Kubernetes fundamentals
* CI/CD pipeline creation
* Docker containerization
* Monitoring setup
* Real-world DevOps workflow

---

## 🙌 Author

**Amit Kumar**

---

## ⭐ Give a Star

If you like this project, please ⭐ the repo!
