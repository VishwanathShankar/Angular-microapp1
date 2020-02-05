node {
    stage('Build') {
        sh 'ls -l'
    }
    stage('Test') {
        sh 'pwd'
    }
    if (currentBuild.currentResult == 'SUCCESS') {
        stage('Deploy') {
            sh 'date'
        }
    }
}
