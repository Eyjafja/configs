return {
	{
		"akinsho/bufferline.nvim",
		config = function()
			require("bufferline").setup{
				options = {
					offsets = {
						{
							filetype = "neo-tree",
							text = "File Explorer",
						}
					},
					diagnostics = "nvim_lsp",
				}
			}
		end
	}
}
