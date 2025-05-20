#!/bin/bash

start() {
    printer "🚀 Starting the app"
    cd app
    npm run start
    cd ..
    handler
}

setup() {
    printer "🔨 Setting up the app"
    cd app
    npm install
    npm run start
    cd ..
    handler
}

build() {
    printer "🔨 Building the app"
    cd app
    npm install
    npm run build
    cd ..
    handler
}

deploy() {
    printer "📦 Deploying the app"

    # -------------------------

    cd app
    npm install
    npm run build
    cd ..

    # -------------------------

    git add .
    git commit -m "Deployed the app"
    git push

    # -------------------------

    handler
}

printer() {
    echo ""
    echo $1
    echo ""
}

handler() {
    if [ $? -eq 0 ]; then
        printer "✅ Process completed successfully"
    else
        printer "❌ An error occurred during the process"
        exit 1
    fi
}

case $1 in
    start)
        start
        ;;
    setup)
        setup
        ;;
    build)
        build
        ;;
    deploy)
        deploy
        ;;
    *)
        echo "Usage: $0 {start|setup|build|deploy}"
        ;;
esac
