return {
{
	"neovim/nvim-lspconfig",
	config = function()
		local lspconfig = require('lspconfig')
		lspconfig.rust_analyzer.setup {
			settings = {
				['rust-analyzer'] = {},
				},
			}
		lspconfig.pyright.setup{}
		lspconfig.clangd.setup{}
	end
	}
}
