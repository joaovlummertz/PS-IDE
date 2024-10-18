"use client";

export default function Movies() {
	return (
		<section
			id="movies"
			className="min-h-[80vh] w-[80%] mx-auto py-16 scroll-mt-[150px]"
		>
			<div className="filmes">
				<h1 className="font-milanello uppercase text-5xl pb-12">
					FILMES EM CARTAZ
				</h1>

				<div className="container">
					<div className="image">
						<img src="/Filme1.png" alt="Poster de Sexta-Feira 13" />
					</div>

					<div className="image">
						<img src="/Filme2.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme3.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme4.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme5.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme6.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme7.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme8.png" alt="Poster de O Chamado" />
					</div>

					<div className="image">
						<img src="/Filme9.png" alt="Poster de Hellraiser" />
					</div>

					<div className="image">
						<img src="/Filme10.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme11.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme12.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme13.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme14.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme15.png" alt="Poster de Filme" />
					</div>

					<div className="image">
						<img src="/Filme16.png" alt="Poster de Filme" />
					</div>
				</div>

				<style jsx>
					{`
						h1 {
							width: auto;
							gap: 0px;
							color: white;
						}

						.container {
							justify-content: center;
							display: grid;
							grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
							gap: 50px;
							margin: 0 auto;
						}

						.image {
							height: auto;
							display: block;
							text-align: center;
						}

						.image img:hover {
							transform: scale(1.15);
							transition: transform 0.3s ease-in-out;
						}
					`}
				</style>
			</div>
		</section>
	);
}
