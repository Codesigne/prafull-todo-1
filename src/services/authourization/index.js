const Role = {
    superAdmin: 'superAdmin',
    admin: 'admin',
    user: 'user'
}
const Permissions = {
    toAdd: [Role.superAdmin, Role.admin, Role.user],
    toComplete: [Role.superAdmin, Role.admin, Role.user],
    toFilter: [Role.superAdmin, Role.admin],
    toSearch: [Role.superAdmin],
    // ----
    toPageHome: [Role.superAdmin, Role.admin, Role.user]
}


function useAutherization(userRole) {
    // const userRole =  
    function hasPermission(permission) {
        // return Permissions[permissions] && Permissions[permissions].includes(userRole);
        return Permissions[permission] && Permissions[permission].includes(userRole);
    }
    return { hasPermission }
}

export default useAutherization
export { Role, Permissions, useAutherization }