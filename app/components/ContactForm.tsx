"use client";

const ContactForm: React.FC = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);
    try {
      const response = await fetch("/api", {
        method: "post",

        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className=" text-lg py-2">
            Nome
          </label>
          <input
            id="name"
            name="name"
            autoComplete="off"
            required
            minLength={3}
            maxLength={150}
            className="border-[1px] border-orange-100 p-1"
            type="text"
          />
        </div>
      <div className="flex flex-col py-2">
        <label htmlFor="email" className=" text-lg py-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          autoComplete="off"
          required
          minLength={8}
          maxLength={150}
          className="border-[1px] border-orange-100 p-1"
          type="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="subject" className=" text-lg py-2">
          Assunto
        </label>
        <input
          id="subject"
          name="subject"
          autoComplete="off"
          className="border-[1px] border-orange-100 p-1"
          type="text"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="message" className=" text-lg py-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          required
          minLength={20}
          maxLength={600}
          className="border-[1px] border-orange-100 p-1"
          rows={10}
        />
      </div>
      <div className="flex flex-col items-center">
        <button
          type="submit"
          className=" p-2 mt-8 text-sm shadow-md  text-sky-100 shadow-gray-400   bg-cyan-700"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
