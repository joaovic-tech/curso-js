"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = _express.Router.call(void 0, );

// Essas rotas em uma aplicação real são uma falha de segurança enorme pois
// * Uma lista todos os usuários da base de dados
// * A outra lista o usuário pelo seu id -> Recomendado se aplicação necessita dessa função
// router.get('/', loginRequired, UserController.index); // ---------- Lista usuários
// router.get('/:id', UserController.show); // ---------- Lista usuário

router.post('/', _UserController2.default.store); // Cria user
router.put('/', _loginRequired2.default, _UserController2.default.update); // Edita user
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Deleta user

exports. default = router;
