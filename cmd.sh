start() {
    printer "🚀 Starting the app"

    # -------------------------

    cd app/
    npm run start
    cd ..

    # -------------------------

    handler
}

build() {
    printer "🔨 Building the app"

    # -------------------------

    cd app/
    npm run install
    npm run start
    cd ..

    # -------------------------

    handler
}

clear() {
    printer "🧹 Clearing the app"

    # -------------------------

    cd app/
    rm -rf node_modules
    npm run clear
    cd ..

    # -------------------------

    handler
}

deploy() {
    printer "🚀 Deploying to GitHub Pages"

    # -------------------------

    cd app/
    npm run build
    cd ..
    git add .
    git commit -m "Deployed to GitHub Pages"
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
        printer "✅ Process completed successfully."
    else
        printer "❌ An error occurred during the process."
        exit 1
    fi
}

case "$1" in
    start)
        start
        ;;
    build)
        build
        ;;
    clear)
        clear
        ;;
    deploy)
        deploy
        ;;
    *)
        echo "Usage: $0 {start|build|clear|deploy}"
        exit 1
        ;;
esac
