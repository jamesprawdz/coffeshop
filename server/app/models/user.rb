class User < ApplicationRecord
    has_secure_password
    
    has_one :cart, dependent: :destroy
    has_many :cart_items, through: :cart
    has_many :orders, dependent: :destroy

end
