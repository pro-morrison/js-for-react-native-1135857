function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const names = ["Alice", "Bob", "Charlie", "Diana", "Prince", "Steven", "Grace"];
const modifiedNames = ["alice", "BOB", "charlie", "DIANA","PRINCE","steven" ,"GRACE" ];
console.log(createUserProfiles(names, modifiedNames));