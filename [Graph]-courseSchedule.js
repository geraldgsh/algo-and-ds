var canFinish = function(numCourses, prerequisites) {
    let map = new Map(prerequisites);
    for (const [key, value] of prerequisites) {
        let array = [key]
        let pre = value
        while (pre || pre == 0) {
            if (array.includes(pre)) {
                return false
            }        
            array.push(pre)
            pre = map.get(pre)
        }
    }        
    return true
};

let prerequisites = [[1,0]];
let prerequisites = [[1,0],[0,1]];