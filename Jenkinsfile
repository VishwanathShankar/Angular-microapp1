pipeline {
  stages {
    stage('HelloWorld') {
      steps {
        echo 'Hello World'
      }
    }
    stage('git clone') {
      steps {
        git clone "ssh://git@mywebsite.com/myrepo.git"
      }
    }
  }
}
