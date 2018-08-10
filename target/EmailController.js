"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const nodemailer = require('nodemailer');
const transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: 'jose.solorzano.1720@gmail.com',
        pass: 'jose1234solorzano'
    }
};
class Email {
}
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Server is ready to take messages');
    }
});
let EmailController = class EmailController {
    sendEmail(email) {
        var mail = {
            from: email.name,
            to: 'jose.mesa.solorzano@gmail.com',
            subject: 'New Message from Contact Form',
            text: `name: ${email.name} \n email: ${email.email} \n message: ${email.message} `
        };
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                return 'fail';
            }
            else {
                return 'succes';
            }
        });
        return 'Working';
    }
};
__decorate([
    routing_controllers_1.Post('/send'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Email]),
    __metadata("design:returntype", void 0)
], EmailController.prototype, "sendEmail", null);
EmailController = __decorate([
    routing_controllers_1.JsonController()
], EmailController);
exports.default = EmailController;
//# sourceMappingURL=EmailController.js.map