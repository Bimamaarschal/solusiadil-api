// postModel.js

const firebaseAdmin = require('../src/models/firebaseConfig');

class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date().toISOString();
    }

    static getAll() {
        return firebaseAdmin.database().ref('posts').once('value');
    }

    static getById(id) {
        return firebaseAdmin.database().ref(`posts/${id}`).once('value');
    }

    save() {
        return firebaseAdmin.database().ref('posts').push({
            title: this.title,
            content: this.content,
            author: this.author,
            createdAt: this.createdAt
        });
    }

    update(id) {
        return firebaseAdmin.database().ref(`posts/${id}`).update({
            title: this.title,
            content: this.content,
            updatedAt: new Date().toISOString()
        });
    }

    static delete(id) {
        return firebaseAdmin.database().ref(`posts/${id}`).remove();
    }
}

module.exports = Post;