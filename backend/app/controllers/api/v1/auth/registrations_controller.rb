# アカウント作成用コントローラー
class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    private
    def sign_up_params
        params.require(:user).permit(:email, :password, :password_confirmation, :name)
    end
end