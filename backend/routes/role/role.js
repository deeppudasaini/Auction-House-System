const express=require('express');
const roleRouter=express.Router();
const {getAllRoles,getRoleById,removeRole,getRoleByUserId,editRole,createRole}=require('../../controllers/Roles/role.controller');

roleRouter.route('/').get(getAllRoles).post(createRole)
roleRouter.route('/:id').get(getRoleById).put(editRole)
roleRouter.route('/user/:id').get(getRoleByUserId)
roleRouter.route('/:id').delete(removeRole)

module.exports=roleRouter;